import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PSCINA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pscina</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Luminosidade sempre" />


        <IonItem><IonToggle color="primary" className="tg1" /> Ligar</IonItem>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
