import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { FormattedMessage } from 'react-intl';
import { fromJS } from 'immutable';

import Team from '../../team/team.component';
import TeamsList from '../teamsList.component';




describe('Teams List Component', () => {
  const defaultProps = {
    items: fromJS({ a: 'a', b: 'b', c: 'c' }),
  };

  const component = (props = {}) => (
    <TeamsList {...defaultProps} {...props} />
  );

  it('should render Team root', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.teams-list'))
      .to.have.length(1);
  });
});
