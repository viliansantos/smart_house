import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem, IonAlert } from '@ionic/react';
import { isOmittedExpression } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SENSOR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sensor</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Detecte intrusos" />

        <IonItem><IonToggle color="primary" className="tg1"/> Ligar</IonItem>

      </IonContent>
    </IonPage>

  );

 
};

export default Tab4;


