import TeamService from '../../core/services/Team';

describe('Loading Team List from API', () => {
  it('must return a array list of users on the team', async () => {
    const teams = await TeamService.getTeam();
    expect(teams.data).toEqual(expect.any(Array));
  });
});
