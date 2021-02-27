import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SALA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sala</IonTitle>
          </IonToolbar>
        </IonHeader>
       

        <ExploreContainer name="Luminosidade sempre" />


        <IonItem><IonToggle color="primary" className="tg2" /> Ligar</IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
