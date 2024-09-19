"use client"

import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';

const AnimalCategorization = () => {
  const [categories, setCategories] = useState([
    { name: 'Land Animal', color: 'green' },
    { name: 'Bird', color: 'red' },
    { name: 'Fish', color: 'blue' },
    { name: 'Insect', color: 'yellow' },
  ]);

  const [animals, setAnimals] = useState([
    { name: 'ELEPHANT', category: 'Land Animal', imageUrl: '/images/elephant.png' },
    { name: 'HORSE', category: 'Land Animal', imageUrl: '/images/horse.png' },
    { name: 'FOX', category: 'Land Animal', imageUrl: '/images/fox.png' },
    { name: 'COCKATOO', category: 'Bird', imageUrl: '/images/cockatoo.png' },
    { name: 'PHOENIX', category: 'Bird', imageUrl: '/images/phoenix.png' },
    { name: 'SPARROW', category: 'Bird', imageUrl: '/images/sparrow.png' },
  ]);

  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [newAnimal, setNewAnimal] = useState({ name: '', category: '', imageUrl: '' });
  const [newCategory, setNewCategory] = useState({ name: '', color: '' });
  const [activeCategory, setActiveCategory] = useState(null);

  const handleAddAnimal = () => {
    setIsAnimalModalOpen(true);
  };

  const handleAddCategory = () => {
    setIsCategoryModalOpen(true);
  };

  const handleAnimalSubmit = (e) => {
    e.preventDefault();
    setAnimals([...animals, newAnimal]);
    setNewAnimal({ name: '', category: '', imageUrl: '' });
    setIsAnimalModalOpen(false);
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, newCategory]);
    setNewCategory({ name: '', color: '' });
    setIsCategoryModalOpen(false);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const filteredAnimals = activeCategory
    ? animals.filter(animal => animal.category === activeCategory)
    : animals;

  return (
    <div className="p-4 bg-black text-white">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="px-3 py-1 rounded-full text-sm border"
              style={{
                borderColor: category.color,
                backgroundColor: activeCategory === category.name ? category.color : 'transparent',
                color: activeCategory === category.name ? 'white' : category.color,
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleAddAnimal}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center"
          >
            <PlusCircle className="mr-1" size={16} /> Add Animal
          </button>
          <button
            onClick={handleAddCategory}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm flex items-center"
          >
            <PlusCircle className="mr-1" size={16} /> Add Category
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {filteredAnimals.map((animal) => (
          <div key={animal.name} className="bg-gray-800 p-2 rounded">
            <img src={animal.imageUrl} alt={animal.name} className="w-full h-auto" />
            <p className="text-center mt-2">{animal.name}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={isAnimalModalOpen} onClose={() => setIsAnimalModalOpen(false)} title="Add Animal">
        <form onSubmit={handleAnimalSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Animal Name"
            value={newAnimal.name}
            onChange={(e) => setNewAnimal({ ...newAnimal, name: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <select
            value={newAnimal.category}
            onChange={(e) => setNewAnimal({ ...newAnimal, category: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Image URL"
            value={newAnimal.imageUrl}
            onChange={(e) => setNewAnimal({ ...newAnimal, imageUrl: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 rounded">Add Animal</button>
        </form>
      </Modal>

      <Modal isOpen={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)} title="Add Category">
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <input
            type="text"
            placeholder="Color (e.g., red, green, blue)"
            value={newCategory.color}
            onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
            className="w-full p-2 bg-gray-700 rounded"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 rounded">Add Category</button>
        </form>
      </Modal>
    </div>
  );
};

export default AnimalCategorization;
