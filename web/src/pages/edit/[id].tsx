import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';
import AuthButton from '../../components/elements/auth/AuthButton';
import AuthInput from '../../components/elements/auth/AuthInput';
import Checkboxes from '../../components/elements/Checkboxes';
import NotFoundPage from '../../components/elements/NotFoundPage';
import Impresum from '../../components/elements/pricepage/Impresum';
import { GeneralStore } from '../../store/Generalstore';
import { Alerts } from '../../utils/Alerts';

const Edit = () => {
  const [side, setSide] = useState('');
  const [color, setColor] = useState('');
  const { addAlert, alerts } = GeneralStore();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getPosts = async () => {
      await axios.get('/letter/all-user');
    };
    getPosts();
  }, []);
  const submit = async () => {
    const response = await axios.patch(`/letter/${id}`, {
      side,
      color,
    });
    if (response.status === 200) {
      addAlert({
        id: 'unique-id',
        message: `Auftrag ${id} wurde erfolgreich bearbeitet`,
        type: 'success',
      });
    }
    router.push('/dashboard/letter/postbox/postbox');
  };

  useEffect(() => {
    const handleDynamicRoute = async () => {
      try {
        await axios.get(`/letter/${id}`);
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 500) {
          return <NotFoundPage />;
        }
      }
    };
    handleDynamicRoute();
  }, [id]);

  return (
    <DashboardContainer>
      <div>
        {alerts.map((alert) => (
          <div key={alert.id}>
            <Alerts />
          </div>
        ))}
        <h1 className="font-bold text-2xl text-center mt-20 mb-10">
          Auftrag {id} bearbeiten
        </h1>
        <div className="justify-center p-5 flex mt-20">
          <div className="bg-[#212323] p-10">
            <h1 className="text-secondary font-bold">Druckeinstellungen</h1>
            <div className="mt-5 text-gray-500">
              Wählen Sie zwischen einem Schwarzweiß- und Farbdruck <br /> aus
              und geben Sie an, ob Ihre Briefe ein- oder doppelseitig <br />
              gedruckt werden sollen.
            </div>
            <div className="flex">
              <Checkboxes
                name={'Schwarzweiß'}
                value={''}
                onClick={() => setColor('Schwarzweiß')}
              />
              <div className="ml-20">
                <Checkboxes
                  name={'Farbe'}
                  value={''}
                  onClick={() => setColor('Farbe')}
                />
              </div>
            </div>
            <div className="flex">
              <Checkboxes
                name={'Einseitig'}
                onClick={() => setSide('Einseitig')}
                value={''}
              />
              <div className="ml-28">
                <Checkboxes
                  name={'Doppelseitig'}
                  value={''}
                  onClick={() => setSide('Doppelseitig')}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#212323] p-10">
            <h1 className="text-secondary font-bold">Versandeinstellungen</h1>
            <div className="mt-5 text-gray-500 flex">
              <AuthInput type={''} label={'Einschreiben'} className="w-60" />
              <div className="ml-20">
                <AuthInput
                  type={''}
                  label={'Zeitversetzer Versand '}
                  className="w-60"
                />
              </div>
            </div>
            <Checkboxes
              name={`C4 Kuvertierhülle: Kuvertierung in einem Umschlag`}
              value={''}
            />
            <div className="ml-8 text-gray-700">
              ohne Falzung (weniger als 9 Blatt)
            </div>
          </div>
        </div>
        <div>
          <AuthButton
            name={'Speichern'}
            className={'w-96'}
            onClick={() => submit()}
          />
        </div>
      </div>

      <div className="mt-20">
        <Impresum />
      </div>
    </DashboardContainer>
  );
};

export default Edit;
