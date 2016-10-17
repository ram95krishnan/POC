import {expect} from 'chai';
import Header from '../components/Header';
import Tab from '../components/Tabs';
import {shallow} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';


describe("Component Test",function(){
  function renderDoc() {
   return shallow(<Header />);
 }
  it("Header is rendered",function(){
    expect(renderDoc()).to.not.equal(undefined);
  });
  it("Tab is rendered",function(){
    expect(renderDoc(<Tab />)).to.not.equal(undefined);
  });
});
