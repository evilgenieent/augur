import React, { Component, PropTypes } from 'react';

import Input from 'modules/common/components/input';
import InputList from 'modules/common/components/input-list';
import CreateMarketFormErrors from 'modules/create-market/components/create-market-form-errors';

import { CATEGORICAL } from 'modules/markets/constants/market-types';
import { CATEGORICAL_OUTCOMES_MIN_NUM, CATEGORICAL_OUTCOMES_MAX_NUM, CATEGORICAL_OUTCOME_MAX_LENGTH } from 'modules/create-market/constants/new-market-constraints';

export default class CreateMarketFormOutcomes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.description !== nextProps.description) this.validateForm(nextProps.description);
  }

  componentWillUpdate(nextProps, nextState) {
    // if (this.state.errors !== nextState.errors) nextProps.updateValidity(!nextState.errors.length);
  }

  validateForm(description) {
    const errors = [];

    // if (!description || !description.length) {
    //   errors.push('Please enter your question');
    // }
    //
    // if (description.length < DESCRIPTION_MIN_LENGTH) {
    //   errors.push(`Text must be a minimum length of ${DESCRIPTION_MIN_LENGTH}`);
    // }
    //
    // if (description.length > DESCRIPTION_MAX_LENGTH) {
    //   errors.push(`Text exceeds the maximum length of ${DESCRIPTION_MAX_LENGTH}`);
    // }

    this.setState({ errors });
  }

  render() {
    const p = this.props;
    const s = this.state;

    return (
      <article className={`create-market-form-part ${p.className || ''}`}>
        <h2>Outcomes</h2>
        {p.type === CATEGORICAL ?
          <InputList
            list={p.outcomes}
            listMinElements={CATEGORICAL_OUTCOMES_MIN_NUM}
            listMaxElements={CATEGORICAL_OUTCOMES_MAX_NUM}
            itemMaxLength={CATEGORICAL_OUTCOME_MAX_LENGTH}
            onChange={outcomes => p.updateNewMarket({ outcomes })}
          /> :
          <span>Scalar</span>
        }
      </article>
    );
  }
}

CreateMarketFormOutcomes.propTypes = {
  type: PropTypes.string.isRequired,
  outcomes: PropTypes.array.isRequired,
  updateValidity: PropTypes.func.isRequired,
  updateNewMarket: PropTypes.func.isRequired
};

// <CreateMarketFormErrors
//   errors={s.errors}
// />
