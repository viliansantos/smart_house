import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem, IonAlert } from '@ionic/react';
import { isOmittedExpression } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PISCINA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pscina</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Luminosidade sempre" />

        <IonItem><IonToggle color="primary" className="tg1"/> Ligar</IonItem>

      </IonContent>
    </IonPage>

  );

 
};

export default Tab1;


