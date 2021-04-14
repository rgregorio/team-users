import React from 'react';
import Table from './Table';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { mount } from 'enzyme';

let container;
let cols = [];
let data = [];

describe('Build table with values', () => {

  cols = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    }
  ];
  
  data = [
    { id: 5, name: 'John' },
    { id: 6, name: 'Liam' },
    { id: 7, name: 'Maya' },
    { id: 8, name: 'Oliver' },
    { id: 9, name: 'Amelia' }
  ];

  container = mount(<Table originalColumns={cols} originalData={data} />);

  it('renders table rows based on provided columns', () => {
    const table = container.find('table');
    expect(table).toHaveLength(1);
    
    // The table should have ONLY 1 thead element
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);
    // The number of th tags should be equal to number of columns
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);
    // // The table should have ONLY 1 tbody tag
    const tbody = table.find('tbody');
    expect(tbody).toHaveLength(1);
    // tbody tag should have the same number of tr tags as data rows
    const rows = tbody.find('tr');
    expect(rows).toHaveLength(data.length);
    // Loop through each row and check the content
    rows.forEach((tr, rowIndex) => {
      const cells = tr.find('td');
      expect(cells).toHaveLength(cols.length);
      expect(cells.at(0).text()).toEqual(data[rowIndex].id.toString());
      expect(cells.at(1).text()).toEqual(data[rowIndex].name);
    });
  });

  it('must execute the filter table and return rows', () => {
    container.find('input').simulate('change', { target: { value: 'John' } })
    
    setTimeout(() => {
      const table = container.find('table');
      expect(table).toHaveLength(1);
      
      const thead = table.find('thead');
      expect(thead).toHaveLength(1);

      const headers = thead.find('th');
      expect(headers).toHaveLength(cols.length);

      const tbody = table.find('tbody');
      expect(tbody).toHaveLength(1);

      const rows = tbody.find('tr');
      expect(rows).toHaveLength(1);
    }, 3000);
  });

  it('must execute the filter table and retun zero coluns', async () => {
    const input = container.find('input');
    input.simulate('change', { target: { value: 'John11' } })
    
    setTimeout(() => {
      const table = container.find('table');
      expect(table).toHaveLength(1);
      
      // The table should have ONLY 1 thead element
      const thead = table.find('thead');
      expect(thead).toHaveLength(1);
      // The number of th tags should be equal to number of columns
      const headers = thead.find('th');
      expect(headers).toHaveLength(cols.length);
      // // The table should have ONLY 1 tbody tag
      const tbody = table.find('tbody');
      expect(tbody).toHaveLength(1);
      // tbody tag should have the same number of tr tags as data rows
      const rows = tbody.find('tr');
      expect(rows).toHaveLength(0);
    }, 3000);
  });
});

describe('Build table without values', () => {

  cols = [];
  data = [];

  container = mount(<Table originalColumns={cols} originalData={data} />);

  it('renders table rows based on provided columns', async () => {    
    const table = container.find('table');
    expect(table).toHaveLength(1);
    
    // The table should have ONLY 1 thead element
    const thead = table.find('thead');
    expect(thead).toHaveLength(1);
    // The number of th tags should be equal to number of columns
    const headers = thead.find('th');
    expect(headers).toHaveLength(cols.length);
    // // The table should have ONLY 1 tbody tag
    const tbody = table.find('tbody');
    expect(tbody).toHaveLength(1);
    // tbody tag should have the same number of tr tags as data rows
    const rows = tbody.find('tr');
    expect(rows).toHaveLength(data.length);
  });
  
});