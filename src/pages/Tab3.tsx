import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ALARME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Alarme</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <ExploreContainer name="Detecte invasores" />


        <IonItem><IonToggle color="primary" className="tg1" /> Ligar</IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
