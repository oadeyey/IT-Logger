import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ loading, techs, getTechs }) => {
  useEffect(() => {
    getTechs();
    // esLint-disable-next-line
  }, [getTechs]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.array,
  loading: PropTypes.bool
};
const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
