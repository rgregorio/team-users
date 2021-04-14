import TeamService from '../../core/services/Team';

describe('Loading User List from API', () => {
  it('must return a array list of users', async () => {
    const teams = await TeamService.getUser();
    expect(teams.data).toEqual(expect.any(Array));
  });
});


describe('Loading especific team from API', () => {
  it('must return the data of the user', async () => {
    const teams = await TeamService.getUser("fd282131-d8aa-4819-b0c8-d9e0bfb1b75c");
    expect(teams.data).toEqual(expect.any(Object));
  });
});