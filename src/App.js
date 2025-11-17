import './index.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard status="New" name="Tesla Model 3 Standard Range Plus" price="360.000.000 đ" location="Florida, USA" year={2020} wheel="Rear-wheel Drive" fuel="electric" seats={5}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
