import React from 'react';
import Layout from '../../Layout';
import DataTable from '../Components/DataTable/DataTable';
import Header from '../Components/Header/Header';
import dish from '../Components/Assets/dish.png';
import CustomizedSwitch from '../Components/CustomizedSwtich/CustomizedSwitch';
import IconButton from '../Components/IconButton/IconButton';

function SubCuisine() {
    return ( 
        <>
        <Layout>
        <Header addButtonTitle="Add New Cusine" menu={[
            {title:'All Main Courses',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'},
            {title:'Last Added',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'},{title:'Last Added',items:['Item_1','Item_2','Item_3'],handleChange:'onClick'}]}/>
             <DataTable columns={[{ id: 'serial', label: '#', minWidth: 170 },
                { id: 'image', label: 'Image', minWidth: 100 },
                {
                        id: 'cuisineName',
                        label: 'Cuisine Name',
                        minWidth: 170,
                        align: 'center',
                        format: (value) => value.toLocaleString('en-US'),
                      },
                      {
                            id: 'numOfMenu',
                            label: 'Num of Menu',
                            minWidth: 170,
                            align: 'center',
                            format: (value) => value.toLocaleString('en-US'),
                          },
                          {
                                id: 'Active',
                                label: 'Active',
                                minWidth: 170,
                                align: 'center',
                                format: (value) => value.toLocaleString('en-US'),
                              },
                              {
                                    id:'Action',
                                    label:'Action',
                                    minWidth:170,
                                    align:'center',
                                    format: (value) => value.toLocaleString('en-US')
                                  }
            
            ]}
            
            rowsdata={[
                {
                serial:'1',
                img:dish,
                cuisines_name:'American',
                num_of_menu:150,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'2',
                img:dish,
                cuisines_name:'Japanes',
                num_of_menu:222,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'3',
                img:dish,
                cuisines_name:'Chiness',
                num_of_menu:32,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'4',
                img:dish,
                cuisines_name:'France',
                num_of_menu:52,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'5',
                img:dish,
                cuisines_name:'Maxican',
                num_of_menu:16,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'6',
                img:dish,
                cuisines_name:'Bangladeshi',
                num_of_menu:72,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'7',
                img:dish,
                cuisines_name:'Indian',
                num_of_menu:82,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'8',
                img:dish,
                cuisines_name:'Maxican',
                num_of_menu:19,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'9',
                img:dish,
                cuisines_name:'American',
                num_of_menu:29,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            },
            {
                serial:'10',
                img:dish,
                cuisines_name:'France',
                num_of_menu:150,
                active:<CustomizedSwitch/>,
                action:<IconButton/>
            }
        ]}
            

            />
            
        </Layout>
        </>
     );
}

export default SubCuisine;