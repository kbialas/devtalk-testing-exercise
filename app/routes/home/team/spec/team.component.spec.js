import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { fromJS } from 'immutable';

import Team from '../team.component';
import TeamsList from '../../teamsList/teamsList.component';

describe('Team Component', () => {
  const defaultProps = {
    data: fromJS({ crestUrl: 'a', name: 'b', squadMarketValue: 'c' }),
  };

  const component = (props = {}) => (
    <Team {...defaultProps} {...props} />
  );

  it('should render Team root', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team'))
      .to.have.length(1);
  });
});
