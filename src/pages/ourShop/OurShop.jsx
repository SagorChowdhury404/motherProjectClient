import React, { useState } from 'react';
import HelmetTittle from '../shared/Helmet/HelmetTittle';
import Cover from '../shared/cover/Cover';
import bannerIMG from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/useMenu/UseMenu';
import MapItems from '../shared/mapingItems/MapItems';
import './OurShop.css';
import LoadingPage from '../shared/loadingPage/loadingPage';

const ITEMS_PER_PAGE = 6;  // 👈 control items per page here

const OurShop = () => {
  const [data, loading] = UseMenu();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(0);


  // loading
  if (loading) {
    return <LoadingPage />;
  }

  // unique categories
  const categories = Array.from(new Set(data.map(item => item.category)));

  // search filter
  const filterItems = (items) => {
    const keywords = searchText.trim().toLowerCase().split(/\s+/);
    if (!keywords[0]) return items;
    return items.filter(item =>
      keywords.every(word => item.name.toLowerCase().includes(word))
    );
  };

  // pagination logic
  const paginateItems = (items) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items.slice(startIndex, endIndex);
  };

  // render paginated + filtered items
  const renderItems = (items) => {
    const filteredItems = filterItems(items);
    const paginatedItems = paginateItems(filteredItems);

    return (
      <>

        {filteredItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500">No items found</div>
        ) : (
          <>
            <MapItems items={paginatedItems} />

            {/* Pagination Controls */}
            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap">
              {Array.from({ length: Math.ceil(filteredItems.length / ITEMS_PER_PAGE) }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`px-3 py-2 rounded border ${page === idx + 1
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

          </>
        )}
      </>
    );
  };

  if (loading) {
    return <div className="text-center text-2xl py-20">Loading menu items...</div>;
  }

  return (
    <div className="pb-20">
      <HelmetTittle
        tittle="Social | Our Shop"
        metaName="description"
        desContent="Order the most delicious food from our shop."
      />

      <Cover
        img={bannerIMG}
        title="Explore Our Shop"
        description="Discover our fresh and mouthwatering dishes crafted for food lovers."
      />

      <section className="py-10">
        <div className="max-w-screen-xl mx-auto px-3">
          {/* Search input */}
          <div className="max-w-sm mx-auto mb-6">
            <input
              type="text"
              placeholder="Search items by name..."
              className="w-full px-8 py-4 border rounded shadow focus:outline-none text-white"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setPage(1);
              }}
            />
          </div>

          {/* Tabs */}
          <Tabs selectedIndex={activeTabIndex} onSelect={(index) => {
            setActiveTabIndex(index);
            setPage(1);
          }}>
            <TabList className="flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-4">
              <Tab className="tab-btn">All</Tab>
              {categories.map(category => (
                <Tab key={category} className="tab-btn capitalize">
                  {category}
                </Tab>
              ))}
            </TabList>

            {/* All Items Panel */}
            <TabPanel>
              {renderItems(data)}
            </TabPanel>

            {/* Category specific panels */}
            {categories.map(category => (
              <TabPanel key={category}>
                {renderItems(data.filter(item => item.category === category))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default OurShop;



// old code
// import React, { useState } from 'react';
// import HelmetTittle from '../shared/Helmet/HelmetTittle';
// import Cover from '../shared/cover/Cover';
// import bannerIMG from '../../assets/shop/banner2.jpg';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import UseMenu from '../../hooks/useMenu/UseMenu';
// import MapItems from '../shared/mapingItems/MapItems';
// import './OurShop.css';  // 👈 custom css with @apply

// const OurShop = () => {
//   const [data] = UseMenu();
//   const [searchText, setSearchText] = useState("");

//   // category wise filter
//   const drinks = data.filter(item => item.category === 'drinks');
//   const dessert = data.filter(item => item.category === 'dessert');
//   const soup = data.filter(item => item.category === 'soup');
//   const pizza = data.filter(item => item.category === 'pizza');
//   const salad = data.filter(item => item.category === 'salad');

//   // improved dynamic search filter
//   const filterItems = (items) => {
//     const keywords = searchText.trim().toLowerCase().split(/\s+/);
//     if (!keywords[0]) return items;
//     return items.filter(item =>
//       keywords.every(word => item.name.toLowerCase().includes(word))
//     );
//   };

//   // Helper function to display "No items found" if no items match
//   const renderItems = (items) => {
//     const filteredItems = filterItems(items);
//     return filteredItems.length === 0 ? (
//       <div className="text-center text-xl text-gray-500">No items found</div>
//     ) : (
//       <MapItems items={filteredItems} />
//     );
//   };

//   return (
//     <div className="pb-20">
//       {/* page helmet */}
//       <HelmetTittle
//         tittle="Social | Our Shop"
//         metaName="description"
//         desContent="Order the most delicious food from our shop."
//       />

//       {/* banner section */}
//       <Cover
//         img={bannerIMG}
//         title="Explore Our Shop"
//         description="Discover our fresh and mouthwatering dishes crafted for food lovers."
//       />

//       {/* Tabs + Search */}
//       <section className="py-10">
//         <div className="max-w-screen-xl mx-auto px-3">
//           {/* Search input */}
//           <div className="max-w-sm mx-auto mb-6">
//             <input
//               type="text"
//               placeholder="Search items by name..."
//               className="w-full px-8 py-4 border rounded shadow focus:outline-none text-white"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//           </div>

//           {/* Tabs */}
//           <Tabs>
//             <TabList className="flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-4">
//               <Tab className="tab-btn">Salad</Tab>
//               <Tab className="tab-btn">Pizza</Tab>
//               <Tab className="tab-btn">Soups</Tab>
//               <Tab className="tab-btn">Desserts</Tab>
//               <Tab className="tab-btn">Drinks</Tab>
//             </TabList>

//             {/* Panels */}
//             <TabPanel>
//               {renderItems(salad)}
//             </TabPanel>
//             <TabPanel>
//               {renderItems(pizza)}
//             </TabPanel>
//             <TabPanel>
//               {renderItems(soup)}
//             </TabPanel>
//             <TabPanel>
//               {renderItems(dessert)}
//             </TabPanel>
//             <TabPanel>
//               {renderItems(drinks)}
//             </TabPanel>

//           </Tabs>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurShop;
