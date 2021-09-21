var initialState = [
    {
        id: 1,
        code: '101011',
        name: 'Macbook Pro 2019',
        price: 1500,
        status: false,
      },
      {
        id: 2,
        code: '101012',
        name: 'Macbook Pro 2020',
        price: 2000,
        status: false,
      },
      {
        id: 3,
        code: '101013',
        name: 'Macbook Pro 2021',
        price: 2500,
        status: true,
      },
      {
        id: 4,
        code: '101014',
        name: 'Macbook Pro 2022',
        price: 3000,
        status: true,
      },
      {
        id: 5,
        code: '101015',
        name: 'Macbook M12',
        price: 3500,
        status: true,
      },
];

const products =  (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default products;