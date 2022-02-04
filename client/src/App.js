import './App.css';

// components
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '이상훈',
    birthday: '000729',
    gender: 'male',
    job: 'none'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이장훈',
    birthday: '990427',
    gender: 'male',
    job: 'student'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '이재영',
    birthday: '961225',
    gender: 'female',
    job: 'student'
  }
]


function App() {
  return (
    <div>
      {customers.map(customer => {
        return <Customer
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
      })}
    </div>
  )
}

export default App;
