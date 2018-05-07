const database = {
  players: [{ id: 3, firstName: 'bob', lastName: 'joe' }],
  competitions: [{ id: 4, name: 'Premier League' }],
  clubs: [{ id: 3, name: 'Arsenal' }],
  findById: (items, id) => items.find(i => i.id === Number(id)),
};

export default database;
