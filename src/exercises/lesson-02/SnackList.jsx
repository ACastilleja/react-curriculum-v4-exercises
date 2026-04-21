const snack = [
  {
    name: 'Peanuts',
    rank: 4,
  },
  {
    name: 'Hot Pickles',
    rank: 3,
  },
  {
    name: 'Chicharron',
    rank: 2,
  },
  {
    name: 'Hot Cheetos',
    rank: 1,
  },
];

function Snacklist() {
  return (
    <ol>
      {snack
        .toSorted((a, b) => a.rank - b.rank)
        .map((item) => (
          <li key={item.rank}>{item.name}</li>
        ))}
    </ol>
  );
}

export default Snacklist;
