import React from 'react';
import "./Footer.css"

const NavigationMenu = () => {
  const categories = [
    { title: 'Navigation', items: ['Home', 'How It Works', 'Examples',  'Social Impact', 'FAQs'] },
    { title: 'About Us', items: ['Additional Services', 'Apply', 'Why We Do This','Our Story','Affiliate Program',] },
    { title: 'Resources', items: ['Services', 'Blogs', 'Tools', 'Videos', 'Reviews'] },
    { 
      title: 'Social Media', 
      items: ['Facebook', 'Youtube', 'Instagram', 'Behance', 'Linkedin']
    }
  ];

  return (
    <div>
        <div className='container px-lg-5 pt-5 pb-3'>
          <div className='border_footer'>
            <div className='row'>
                {categories.map((category, index) => (
          <div key={index} className='col-lg-3'>
            <h3 className='footer_category_title'>{category.title}</h3>
            <ul style={{listStyle:"none", paddingLeft:"0"}} className='pt-3'>
              {category.items.map((item, subIndex) => (
                <li className='footer_category_li pt-2' key={subIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
            </div>
            </div>
            <div className='pt-lg-4 pt-md-3 pt-3'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div>
                      <span className='footer_text_p'>© 2024 <span className='fw-bold'>Elevonix Tech ®</span>. All rights reserved. </span>
                      <p className='dark_brown_divider'></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default NavigationMenu;
