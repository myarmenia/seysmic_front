import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useNavigation, useParams } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { getLang } from '../../helper';
import { Footer, Header, MonitoringNavbar, Spinner } from '../main';
// import { useLengPoint } from "../../hooks/useLengPoint";
import instance from '../../api';

const Component = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const { lang } = useParams();
  useEffect(() => {
    if (pathname === '/') {
      if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', process.env.REACT_APP_DEFAULT_LANG);
        navigate(`/${process.env.REACT_APP_DEFAULT_LANG}/home`);
      } else {
        navigate(getLang('/home'));
      }
    }
  }, [pathname, navigate]);
  useEffect(() => {
    if (pathname.split('/').length < 3) {
      navigate(getLang('/home'));
    }
  }, [lang, pathname, navigate]);
  return (
    <>
      <div className="root">
        <Header />
        <div className="relative overflow-x-hidden">
          <main className="h-full !max-w-[1820px] mx-auto w-[80%] overflow-hidden">
            <Outlet />

            {navigation.state !== 'idle' && <Spinner />}
          </main>
        </div>
        <Footer />
        {/* ------------- For scrolling to top -------------- */}
        <ScrollRestoration />
        {/* ================================================= */}
        <MonitoringNavbar />
      </div>
    </>
  );
};
const loader = async () => {
  try {
    const res = await instance.get(`footer/social-links`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const Root = Object.assign(Component, { loader });
