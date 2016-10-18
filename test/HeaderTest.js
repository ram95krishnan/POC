import {expect} from 'chai';
import {assert} from 'chai';

import Courses from '../reducers/allreducers';

import Header from '../components/Header';
import Tab from '../components/Tabs';
import {shallow} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import HTMLL from '../components/Html';

describe("Component Test",function(){
  function renderDoc(x) {
   return shallow(x);
 }
  it("Header is rendered",function(){
    expect(renderDoc(<Header />)).to.not.equal(undefined);
  });
  it("Tab is rendered",function(){
    expect(renderDoc(<Tab />)).to.not.equal(undefined);
  });
  it("HTML Tab is getting rendered",function(){
    expect(renderDoc(<HTMLL />)).to.not.equal(undefined);
  });
});


describe("Tab 1",function(){
  let x=Courses();
  it("Has 5 subtabs",function(){
    assert.equal(x.length,4,"Checking no. of courses");
  });
});
