import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { fromJS } from 'immutable';

import Team from '../../team/team.component';
import TeamsList from '../teamsList.component';

describe('Teams List Component', () => {
  const defaultProps = {
    items: fromJS({ testValue1: 'test-value-1', testValue2: 'test-value-2', testValue3: 'test-value-3' }),
  };

  const component = (props = {}) => (
    <TeamsList {...defaultProps} {...props} />
  );

  it('should render Team root', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.teams-list'))
      .to.have.length(1);
  });
  it('should render team list title', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.teams-list__title'))
      .to.have.length(1);
  });
  it('should render team list items', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.teams-list__items'))
      .to.have.length(1);
  });
  it('should render message', () => {
    const wrapper = shallow(component());
    expect(wrapper.find(FormattedMessage))
      .to.have.length(1);
  });
  it('should pass data into Team', () => {
    const wrapper = shallow(component());
    expect(wrapper.find(Team).first().prop('data'))
      .to.be.equal(defaultProps.items.get('testValue1'));
  });
});
