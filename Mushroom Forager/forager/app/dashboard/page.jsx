'use client'
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import DashboardTitle from '../../components/Dashboardheader';
import MushroomList from '../../components/MushroomList';
import Searchbar from '../../components/Searchbar';
import FilterSettings from '../../components/FilterSettings';
import { getAllMushrooms } from '../../data/development.jsx';

const FilterTag = ({ label }) => (
  <span className="px-3 py-1 text-white text-sm font-medium bg-[#579076] rounded-full">
    {label}
  </span>
);

// Utility function to filter mushrooms
const filterMushrooms = (mushrooms, searchQuery, filters) => {
  let result = [...mushrooms];

  // Search filter
  if (searchQuery.trim()) {
    result = result.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  // Tag filters
  if (filters.tags.includes('Favorites')) {
    result = result.filter(m => m.favorites === true);
  }
  if (filters.tags.includes('Recent Viewed')) {
    result = result.filter(m => m.recentViewed !== null);
  }

  // Region filter
  if (filters.regions.length > 0) {
    result = result.filter(m => filters.regions.some(region => m.regions.includes(region)));
  }

  // Category filter
  if (filters.categories.length > 0) {
    result = result.filter(m => {
      const mushroomCategories = Array.isArray(m.category) ? m.category : [m.category];
      return filters.categories.some(cat => 
        mushroomCategories.some(mc => mc.toLowerCase() === cat.toLowerCase())
      );
    });
  }

  return result;
};

export default function DashboardPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    tags: ['Favorites'],
    regions: ['Texas'],
    categories: [],
  });
  const [filteredMushrooms, setFilteredMushrooms] = useState(getAllMushrooms());

  useEffect(() => {
    setFilteredMushrooms(filterMushrooms(getAllMushrooms(), searchQuery, selectedFilters));
  }, [searchQuery, selectedFilters]);

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterClick = () => setShowFilter(true);
  const handleCloseFilter = (newFilters) => {
    setShowFilter(false);
    if (newFilters && Object.keys(newFilters).length > 0) {
      setSelectedFilters(prev => ({ ...prev, ...newFilters }));
    }
  };

  // Extracted filter tags rendering for clarity
  const renderFilterTags = () => {
    const allFilters = [
      ...selectedFilters.tags,
      ...selectedFilters.regions,
      ...selectedFilters.categories,
    ];
    return allFilters.length > 0 ? (
      <div className="flex flex-wrap gap-2 mt-2">
        {allFilters.map((filter, index) => (
          <FilterTag key={`filter-${index}`} label={filter} />
        ))}
      </div>
    ) : null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardTitle />

      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center">
          <div className="max-w-sm w-full h-full">
            <FilterSettings
              handleClose={handleCloseFilter}
              selectedFilters={selectedFilters}
            />
          </div>
        </div>
      )}

      <div className="bg-[#F2F2F2] flex-grow rounded-t-3xl -mt-4 z-10">
        <div className="p-4 pt-6 max-w-4xl mx-auto">
          <div className="mx-8 mb-4">
            <Searchbar
              onSearch={handleSearch}
              onFilterClick={handleFilterClick}
              placeholder="Search for mushrooms"
            />
          </div>

          <div className="ml-8 mt-9">
            <h1 className="text-[#20385F] text-3xl font-bold mb-2">My Collection</h1>
            {renderFilterTags()}
          </div>

          {filteredMushrooms.length === 0 ? (
            <p className="text-center py-8 text-gray-500">
              No mushrooms match your search or filters. Try adjusting them.
            </p>
          ) : (
            <MushroomList mushrooms={filteredMushrooms} />
          )}
        </div>
      </div>

      <NavBar />
    </div>
  );
}