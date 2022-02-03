import './App.css';

// components
import Customer from './components/Customer';

const customer = {
  name: '이상훈',
  birthday: '000729',
  gender: 'male',
  job: 'none'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  )
}

export default App;
