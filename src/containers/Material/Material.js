import React, { Component } from 'react';
import EditMaterial from '../EditMaterial/EditMaterial';
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm';
import MaterialDetails from '../../components/MaterialDetails/MaterialDetails';

class Material extends Component {

  render() {
    const { brand, name } = this.props.material
    return (
      <div key={name} className='material'>
        <p>{name}, {brand}</p>
        <div className='material-control'>
          <MaterialDetails {...this.props.material}/>
          <EditMaterial {...this.props.material}/>
          <DeleteConfirm type="material"/>
        </div>
      </div>
    );
  }
}

export default Material;