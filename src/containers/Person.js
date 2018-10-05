import React,{Component} from 'react';
import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css';

class Person extends Component{
  constructor(props) {
    super(props);

    this.state= {
      list: [],
      person: {
        name: '',
        surName: '',
        age: '',
        active: false,
      }
    }
  }

  componentDidMount(){
    console.log(localStorage.hasOwnProperty('personData'));
    if(localStorage.hasOwnProperty('personData')) {
      const list = localStorage.getItem('personData');
      console.log('localStorage getItem ', list);
      this.setState({
        list:JSON.parse(list),
      });
    } else {
      const list = [
        {name: 'ahmet', surName: 'çetin', age: 30, active: true},
      ];

      localStorage.setItem('personData', JSON.stringify(list));
      this.setState({
        list: list,
      });
    }

  }

  savePerson() {
    this.setState((prevState) => {
      const list = _.clone(prevState.list);
      list.push(this.state.person);
      localStorage.setItem('personData',JSON.stringify(list));
      return {
        ...prevState,
        list,
      }
    });
  }
  render(){
    console.log('Person::render state:', this.state);

    return (
      <div>
        <div className='row'>
          <div className='col'>
            <form>
              <div className='form-group'>
              <label htmlFor="personNameInput"> Ad: </label>
              <input type="email" className="form-control" value={this.state.person.name} onChange={(e) => {
                e.persist();
                this.setState((prevState) => ({
                  ...prevState,
                  person: {
                    ...prevState.person,
                    name: e.target.value,
                  },
                }))
              }} />
            </div>
            <div className='form-group'>
              <label htmlFor="surNameInput"> SoyAd: </label>
              <input type="email" className="form-control" onChange={(e) => {
                e.persist();
                this.setState((prevState) => ({
                  ...prevState,
                  person: {
                    ...prevState.person,
                    surName: e.target.value,
                  },
                }))
              }} />
            </div>
            <div className='form-group'>
              <label htmlFor="surNameInput"> Yaş: </label>
              <input type="email" className="form-control" onChange={(e) => {
                e.persist();
                this.setState((prevState) => ({
                  ...prevState,
                  person: {
                    ...prevState.person,
                    age: e.target.value,
                  },
                }))
              }} />
            </div>
            <div className='form-group form-check'>
              <input type="checkbox" className="form-check-input" onChange={(e) => {
                e.persist();
                this.setState((prevState) => ({
                  ...prevState,
                  person: {
                    ...prevState.person,
                    active: !prevState.person.age,
                  },
                }))
              }} />
              <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => this.savePerson()}>Ekle</button>
        </form>
      </div>
    </div>
    <div style={{marginTop: 30}}>
    <div className='row'>
      <div className='col'>
        {this.state.list.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Active</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
          {this.state.list.map((item, key) =>(
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.surName}</td>
              <td>{item.age}</td>
              <td>{item.active ? 'true' : 'false'}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
    </div>
  </div>
  );
  }
}


export default Person;
