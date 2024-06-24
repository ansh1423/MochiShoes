import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h1 className='grid max-md:none text-6xl mb-5 max-lg:text-3xl max-md:hidden pt-16 justify-center font-[200px]' style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        SHOP BY CATEGORIES
      </h1>
      <div className='flex max-md:hidden items-center justify-center'>
        <Box sx={{ width: '100%', display: '', justifyContent: "center" }}>
          <div className='flex justify-center items-center'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Men Shoes" {...a11yProps(0)} />
                <Tab label="Kids Shoes" {...a11yProps(1)} />
                <Tab label="Women Shoes" {...a11yProps(2)} />
                <Tab label="Accessories" {...a11yProps(3)} />
              </Tabs>
            </Box>
          </div>
          <div className=''>
            <CustomTabPanel value={value} index={0}>
              <div className='flex items-center justify-center'>
                <div className='flex gap-5 justify-between'>
                  <div className='w-[100%] flex gap-5 justify-between h-auto'>
                    <div>
                      <Image src="/Homepage/Men/1.webp" alt="Men Formal Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Men Formal Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Graceful & Professional Footwear</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Men Formal Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Men/2.webp" alt="Men Wedding Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Men Wedding Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Walk Down the Aisle in Style</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Men Wedding Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Men/3.webp" alt="Men Sandals" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Men Sandals</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Chic Comfort for Every Step</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Men Sandals</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Men/4.webp" alt="Men Stylish" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Men Stylish</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Elevate Your Fashion with Elegance</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Stylish Men Shoes</a>
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className='flex items-center justify-center'>
                <div className='flex gap-5 justify-between'>
                  <div className='w-[100%] flex gap-5 justify-between h-auto'>
                    <div>
                      <Image src="/Homepage/Kids/1.webp" alt="Kids Formal Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Kids Formal Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Graceful & Professional Footwear</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Kids Formal Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Kids/2.webp" alt="Kids Wedding Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Kids Wedding Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Walk Down the Aisle in Style</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Kids Wedding Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Kids/3.webp" alt="Kids Sandals" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Kids Sandals</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Chic Comfort for Every Step</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Kids Sandals</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Kids/4.webp" alt="Stylish Kids Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Stylish Kids Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Elevate Your Fashion with Elegance</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Stylish Kids Shoes</a>
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className='flex items-center justify-center'>
                <div className='flex gap-5 justify-between'>
                  <div className='w-[100%] flex gap-5 justify-between h-auto'>
                    <div>
                      <Image src="/Homepage/Women/1.webp" alt="Women Formal Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Women Formal Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Graceful & Professional Footwear</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Women Formal Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Women/2.webp" alt="Women Wedding Shoes" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Women Wedding Shoes</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Walk Down the Aisle in Style</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Women Wedding Shoes</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Women/3.webp" alt="Women Sandals" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Women Sandals</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Chic Comfort for Every Step</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Women Sandals</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Women/4.webp" alt="Women Stylish" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Women Stylish</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Elevate Your Fashion with Elegance</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Stylish Women Shoes</a>
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div className='flex items-center justify-center'>
                <div className='flex gap-5 justify-between'>
                  <div className='w-[100%] flex gap-5 justify-between h-auto'>
                    <div>
                      <Image src="/Homepage/Accessories/1.webp" alt="Accessory 1" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Accessory 1</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Description of Accessory 1</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Accessory 1</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Accessories/2.webp" alt="Accessory 2" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Accessory 2</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Description of Accessory 2</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Accessory 2</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Accessories/3.webp" alt="Accessory 3" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Accessory 3</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Description of Accessory 3</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Accessory 3</a>
                    </div>
                    <div>
                      <Image src="/Homepage/Accessories/4.webp" alt="Accessory 4" width={500} height={500} />
                      <p className='font-[600] mt-3 text-[16px]'>Accessory 4</p>
                      <h6 className='font-[400] mb-8 my-1 text-[12px]'>Description of Accessory 4</h6>
                      <a className='font-[400] border px-12 py-3 my-4 text-center text-[14px]' href="#">Shop Accessory 4</a>
                    </div>
                  </div>
                </div>
              </div>
            </CustomTabPanel>
          </div>
        </Box>
      </div>
    </>
  );
}
