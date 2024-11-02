import firestore from '@react-native-firebase/firestore';

// Función para obtener todos los artículos de la colección 'items'
const getItems = (setItems, setFilteredItems) => {
    const unsubscribe = firestore()
      .collection('items') // Nombre de la colección en Firebase
      .onSnapshot(snapshot => {
        const itemsFromFirebase = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Actualizamos los estados para mostrar todos los artículos y los filtrados
        setItems(itemsFromFirebase);
        setFilteredItems(itemsFromFirebase);
      }, (error) => {
        console.error("Error al obtener los artículos: ", error);
      });

    // Devuelve la función de desuscripción para limpiar el listener
    return unsubscribe;
};

// Función para obtener un artículo específico de la colección 'items' por ID
const getItemById = async (id, setItem) => {
  try {
    const itemSnapshot = await firestore()
      .collection('items')
      .doc(id)
      .get();

    if (itemSnapshot.exists) {
      setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
    } else {
      console.error("El artículo no existe.");
    }
  } catch (error) {
    console.error("Error al obtener el artículo: ", error);
  }
};

// Función para obtener artículos por categoría
const getItemsByCategory = (category, setItems) => {
  const unsubscribe = firestore()
    .collection('items')
    .where('category', '==', category)
    .onSnapshot(snapshot => {
      const filteredItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(filteredItems);
    }, (error) => {
      console.error("Error al obtener artículos por categoría: ", error);
    });

  return unsubscribe;
};

// Exportamos las funciones para usarlas en los componentes de la aplicación
export { getItems, getItemById, getItemsByCategory };
