import Category from './Category';
import TableRow from './table-row';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={18000500} icon="ic-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={845500} icon="ic-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={18000500} icon="ic-desktop">
                Other
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  gameTitle="Mobile Legend"
                  gameCategory="Mobile"
                  item={200}
                  price={290000}
                  status="Success"
                  image="overview-1"
                />
                <TableRow
                  gameTitle="Mobile Legend"
                  gameCategory="Mobile"
                  item={200}
                  price={290000}
                  status="Failed"
                  image="overview-1"
                />
                <TableRow
                  gameTitle="Mobile Legend"
                  gameCategory="Mobile"
                  item={200}
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
                <TableRow
                  gameTitle="Mobile Legend"
                  gameCategory="Mobile"
                  item={200}
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
