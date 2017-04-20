import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import Team from '../team.component';

describe('Team Component', () => {
  const defaultProps = {
    data: fromJS({ crestUrl: 'http://apptension.com', name: 'test-name', squadMarketValue: 'test-value' }),
  };

  const component = (props = {}) => (
    <Team {...defaultProps} {...props} />
  );

  it('should render Team root', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team')).to.have.length(1);
  });

  it('should render team logo', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-logo')).to.have.length(1);
  });

  it('should render team name', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-name')).to.have.length(1);
  });

  it('should render team value', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-value')).to.have.length(1);
  });

  it('should insert correctly values in team-logo style', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-logo')).to.have.style('background-image', 'url(http://apptension.com)');
  });

  it('should insert correctly values in team-name', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-name').text()).to.be.equal('test-name,');
  });

  it('should insert correctly values in team-value', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.team-value').text()).to.be.equal('test-value');
  });
});
