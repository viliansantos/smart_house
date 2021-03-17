import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem, IonAlert } from '@ionic/react';
import { isOmittedExpression } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BUZZER</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BUZZER</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Detecte intrusos" />

        <IonItem><IonToggle color="primary" className="tg1"/> Ligar</IonItem>

      </IonContent>
    </IonPage>

  );

 
};

export default Tab5;


