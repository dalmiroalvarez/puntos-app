import React, { useState } from 'react';
import styled from 'styled-components';
import dcacLogo from '../assets/images/dcaclogo.png';
import ganarPuntos from '../assets/images/ganando_puntos.jpg';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 0;
`;

const Logo = styled.div``;

const LogoImg = styled.img`
  height: 30px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  font-size: 12px;
  font-family: sans-serif;
  color: #666666;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.a`
  position: relative; /* Para que el modal sea posicionado correctamente */
  padding: 1px 18px;
  color: white;
  border: none;
  font-family: sans-serif;
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  font-size: 14px;
  height: 46px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 500;
  cursor: pointer;

  /* Transición para la animación del modal */
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  font-family: sans-serif;
  color: #3179A7;
  margin-left: 20px;
  font-size: 30px;
`;

const DivWhite = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const StyledButton = styled.button`
  color: #3179A7;
  background-color: #fff;
  border: 1px solid #3179A7;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  line-height: 1;
  width: 70%;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-family: sans-serif;
  color: #666666;
  font-weight: 500;
  margin-top: 20px;
`;

const SimpleSeguro = styled.h5`
  font-size: 16px;
  color: #666666;
  margin-top: 20px;
`;

const Alert = styled.div`
  background-color: rgba(255, 232, 153, 0.5);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const AlertTitle = styled.h2`
  color: #403e38;
  font-size: 20px;
  text-transform: uppercase;
  font-family: sans-serif;
`;

const AlertSubtitle = styled.p`
  color: #403e38;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 600;
`;

const AlertImage = styled.img`
  width: 15%;
  border-radius: 50%;
  margin-top: 20px;
`;

const MarketModal = styled.div`
  position: absolute;
  top: calc(12% + 10px); /* Posición por debajo del botón */
  left: 85%;
  width: 340px;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: none;
  font-family: sans-serif;
`;

const ModalTitle = styled.h3`
  color: #3179A7;
  font-size: 20px;
  margin-bottom: 10px;
`;

const ModalButton = styled.button`
  color: #fff;
  background-color: #3179A7;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
`;

const MarketButton = styled(Button)`
  &:hover + ${MarketModal} {
    display: block;
  }
`;

const MarketContent = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #666666;
`;

const NavbarComponent = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCotizarClick = () => {
    setShowConfirmation(true);
  };

  const handleIngresarNuevaTropa = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Navbar>
        <Logo>
          <LogoImg src={dcacLogo} alt="DCAC Logo" />
        </Logo>
        <NavLinks>
          <NavLinkItem>OPERACIONES</NavLinkItem>
          <NavLinkItem>PRECIOS</NavLinkItem>
          <NavLinkItem>PERFIL</NavLinkItem>
          <NavLinkItem>CONSULTAS</NavLinkItem>
          <NavLinkItem>CLIMA</NavLinkItem>
        </NavLinks>
        <Buttons>
          <Button href="#" bgColor="#3179A7">Comprar</Button>
          <Button href="#" bgColor="#55A32A">Cotizar</Button>
          <Button href="#" bgColor="#1795CC">Pagos</Button>
          <MarketButton bgColor="#FACF3A">Market</MarketButton>
          <MarketModal>
            <ModalTitle>Recompensa Ganadera</ModalTitle>
            <ModalButton>Canjear</ModalButton>
            <MarketContent>
              Acumulá puntos al:<br />
              - Publicar un lote<br />
              - Aceptar una cotización<br />
              - Completar tus datos
            </MarketContent>
          </MarketModal>
        </Buttons>
      </Navbar>
      <div style={{backgroundColor: '#F7F7F7', minHeight: '100vh'}}>
        <Title>Cotizá tu Hacienda</Title>
        <p style={{fontSize: '17px', color: '#666666', marginLeft: '20px', fontWeight: '500', fontFamily: 'sans-serif'}}>La cotización es gratuita y no implica un compromiso de venta.</p>
        <DivWhite>
          <p style={{fontSize: '17px', color: '#666666', fontWeight: '500', fontFamily: 'sans-serif'}}>Seleccioná qué tipo de hacienda querés vender</p>
          <StyledButton onClick={handleCotizarClick}>Cotiza tu hacienda de Faena</StyledButton>
          <Title>Simple y Seguro</Title>
        </DivWhite>
        {showConfirmation && (
          <DivWhite>
            <Title>Su tropa ha sido creada correctamente</Title>
                <Alert>
                    <AlertTitle>¡Sumaste 200 Puntos!</AlertTitle>
                    <AlertImage src={ganarPuntos} alt="Puntos Icon" />
                    <AlertSubtitle>Seguí sumando puntos para canjear por diferentes premios. Podés chequear todos los productos disponibles en el Market</AlertSubtitle>
                </Alert>
            <Subtitle>Su tropa ha sido creada correctamente. Se le notificará vía email cuando la misma sea publicada. La puede visualizar como pendiente de publicación dentro de Operaciones.</Subtitle>
            <Button href="#" bgColor="#3179A7" onClick={handleIngresarNuevaTropa}>Ingresar Nueva Tropa</Button>
          </DivWhite>
        )}
      </div>
    </>
  );
}

export default NavbarComponent;
