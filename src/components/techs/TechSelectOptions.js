import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // esling-disable-next-line
  }, [getTechs]);
  return (
    <Fragment>
      {!loading &&
        techs &&
        techs !== null &&
        techs.map(t => (
          <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
            {t.firstName}
            {t.lastName}
          </option>
        ))}
    </Fragment>
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
