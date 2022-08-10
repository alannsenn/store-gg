import Footer from './footer';
import MenuItem from './menu-item';
import Profile from './profile';

interface SidebarProps {
  activeMenu:
    | 'overview'
    | 'transactions'
    | 'cards'
    | 'messages'
    | 'rewards'
    | 'settings'
    | 'logout';
}

export default function Sidebar(props: SidebarProps) {
  const activeMenu = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === 'overview'}
            href="/"
          />
          <MenuItem
            title="Transaction"
            icon="ic-menu-transaction"
            active={activeMenu === 'transactions'}
            href="/member/transactions"
          />
          <MenuItem
            title="Message"
            icon="ic-menu-message"
            active={activeMenu === 'messages'}
            href="/"
          />
          <MenuItem
            title="Card"
            icon="ic-menu-card"
            active={activeMenu === 'cards'}
            href="/"
          />
          <MenuItem
            title="Rewards"
            icon="ic-menu-rewards"
            active={activeMenu === 'rewards'}
            href="/"
          />
          <MenuItem
            title="Settings"
            icon="ic-menu-setting"
            active={activeMenu === 'settings'}
            href="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
