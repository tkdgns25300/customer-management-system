import './App.css';

// components
import Customer from './components/Customer';

const customer = {
  id: 1,
  image: 'https://placeimg.com/64/64/any',
  name: '이상훈',
  birthday: '000729',
  gender: 'male',
  job: 'none'
}

function App() {
  return (
    <Customer
      id={customer.id}
      image={customer.image}
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  )
}

export default App;
