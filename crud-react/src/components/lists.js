import React from 'react';
class lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return ( <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>ROLE</th>
                    <th>OPTIONS</th>
                    <th>L</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Jake Harrow</td>
                    <td>Buena vista, 342</td>
                    <td>Data Engineer</td>
                    <td>
                        <div class="btn-group" role="group" aria-label=''>
                            <button type='button' className="btn btn-warning">Edit data </button>
                            <button type='button' className="btn btn-warning">Delete data </button>
                        </div>
                    </td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>John Lopez</td>
                    <td>Rockford Hills, 455</td>
                    <td>Back-end Developer</td>
                    <td>
                        <div class="btn-group" role="group" aria-label=''>
                            <button type='button' className="btn btn-warning">Edit data </button>
                            <button type='button' className="btn btn-warning">Delete data </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table> );
    }
}
 
export default lists;