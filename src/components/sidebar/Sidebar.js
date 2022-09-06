import { sidebarCategories } from '../../utils/constants';
import './_sidebar.scss';

const Sidebar = ({ showSidebar }) => {
  const smallSidebarItems = [
    ...sidebarCategories[0],
    sidebarCategories[1][0],
    sidebarCategories[1][1],
  ];
  console.log(showSidebar);
  return (
    <aside className={`sidebar ${showSidebar ? '' : ' sidebar-small'}`}>
      <div className='sidebar__nav'>
        {!showSidebar && (
          <div className='sidebar__section'>
            {smallSidebarItems.map(category => (
              <div className='sidebar__link' key={category.id}>
                <div className='sidebar__icon'>{category.icon}</div>

                <div className='sidebar__caption'>{category.name}</div>
              </div>
            ))}
          </div>
        )}
        {showSidebar && (
          <>
            {sidebarCategories.map(categoryArr => (
              <div className='sidebar__section'>
                {categoryArr.map(category => (
                  <div className='sidebar__link' key={category.id}>
                    <div className='sidebar__icon'>{category.icon}</div>
                    <div className='sidebar__caption'>{category.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
