import shortid from 'shortid';

const createBunny = ({ title, description, url }) => ({  
  _id: shortid.generate(),
  title,
  description,
  url
});

export function loadBunnies(state) {
  return {
    ...state,
    bunnies: [ 
      createBunny({ 
        _id: '1',
        title: 'Halloween Bunny',
        description: 'Isn\'t it a fuzzy-wuzzy, cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg' }),
      createBunny({ 
        _id: '2',
        title: 'Belly Bunny',
        description: 'I\'m a rub-my-belly bunny',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg' }),
      createBunny({ 
        _id: '3',
        title: 'Side-Eye Bunny',
        description: 'Were you taking to me?',
        url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg' })
    ]
  };
}

export function addBunny(state, { title, description, url }) {
  return {
    ...state,
    bunnies: [
      ...state.bunnies,
      createBunny({ title, description, url })
    ]
  };
}

export function removeBunny(state, _id) {
  const i = state.bunnies.findIndex(title => title._id === _id);
  if(i === -1) return;

  const bunnies = state.bunnies.slice(); 

  bunnies.splice(i, 1); // 1st parameter says what position to affect, 2nd parameter determines add(0)/remove(1)
  return {
    ...state,
    bunnies
  };
}