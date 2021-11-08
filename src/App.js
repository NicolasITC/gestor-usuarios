import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  return (
    <Container>
      <div style={{ marginTop:'15%' }}>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((user) =>
              <li key={user.email}> {`${user.name} ${user.lastname}: ${user.email}`}</li>
            )}
          </ul>
        </Card>
      </div>
    </Container>
  );
}

export default App;
