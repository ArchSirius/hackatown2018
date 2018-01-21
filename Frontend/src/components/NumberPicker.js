import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import Input from './Input';

const onClickHandler = cb => e => {
  e.preventDefault();
  cb();
};

const onInputChangeHandler = cb => e => {
  e.preventDefault();
  const value = e.target.value;
  const isNotNumber = isNaN(parseFloat(value)) || !isFinite(value);
  if (isNotNumber) {
    return cb(0);
  }
  return cb(parseInt(Math.abs(value), 10));
};

const StyledButton = styled(Button)`
  padding: 5px 11px;
  font-size: 1.4em;
`;

const InputWithUnitWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: ${props => props.width + 'px'};
  padding-right: 8px;
`;

const UnitInput = styled(Input)`
  width: ${props => (props.width ? props.width + 'px' : '60px')};
  margin: 0 4px;
  padding-right: ${props => props.unitLength * 8 + 8 + 'px'};
  border-color: ${props => props.theme.palette.border};
`;

const UnitController = styled.div`display: flex;`;

const UnitDiv = styled.div`
  max-width: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 9px;
  color: ${props => props.theme.palette.textLight};
`;

const NumberPicker = ({ input: { value, onChange, unit } }) => {
  const width = unit && unit.length > 1 ? 90 : 60;
  return (
    <div>
      <UnitController>
        <StyledButton
          inverted={true}
          btnType="primary"
          onClick={onClickHandler(() => onChange(value > 0 ? value - 1 : 0))}
        >
          <i className="fa fa-angle-left" />
        </StyledButton>
        <InputWithUnitWrapper width={width}>
          <UnitInput
            value={value}
            onChange={onInputChangeHandler(onChange)}
            width={width}
            unitLength={unit ? unit.length : 0}
          />
          {unit ? (
            <UnitDiv>
              <span>{unit}</span>
            </UnitDiv>
          ) : null}
        </InputWithUnitWrapper>
        <StyledButton
          inverted={true}
          btnType="primary"
          onClick={onClickHandler(() => onChange(value + 1))}
        >
          <i className="fa fa-angle-right" />
        </StyledButton>
      </UnitController>
    </div>
  );
};

export default NumberPicker;
