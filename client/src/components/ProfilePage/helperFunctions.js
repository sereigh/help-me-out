
  const handleGetTargetName = (e) => (e.target.name);
  const handleDeleteItem = (itemToDelete, itemArray) => {
    let updatedArray = [];
    itemArray.forEach((item) => {
      if (item !== itemToDelete) {
        updatedArray.push(item);
      }
    });
    return updatedArray;
  };
  const handleAddItem = (itemToAdd, itemArray) => {
    if (itemArray.indexOf(itemToAdd) === -1 && itemToAdd.length > 3) {
      const revisedArray = itemArray.concat(itemToAdd);
      return revisedArray;
    }
  };

  module.exports = {handleAddItem, handleDeleteItem, handleGetTargetName}