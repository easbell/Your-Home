import React, { Component } from 'react';
import EditMaterial from '../EditMaterial/EditMaterial';
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm';
import MaterialDetails from '../../components/MaterialDetails/MaterialDetails';

class Material extends Component {
  render() {
    const { id, brand, name } = this.props
    return (
      <div key={id} className='material'>
        <p>{name}, {brand}</p>
        <div className='material-control'>
          <MaterialDetails {...this.props}/>
          <EditMaterial {...this.props}/>
          <DeleteConfirm type="material"/>
        </div>
      </div>
    );
  }
}

export default Material;