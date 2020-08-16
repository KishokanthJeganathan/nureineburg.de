import React, { useState, useContext } from 'react';
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';
import StoreContext from '../../context/StoreContext';
import { Button } from '../../utils/styles';
import { Wrapper, ProductOptions, OptionName, OptionValues, ProductValue } from './styles';

const ProductForm = ({ product }) => {
	const { options, variants, variants: [ initialVariant ] } = product;
	const [ variant, setVariant ] = useState({ ...initialVariant });
	const [ quantity ] = useState(1);
	const { client, adding, addVariantToCart } = useContext(StoreContext);

	const productVariant = client.product.helpers.variantForOptions(product, variant) || variant;

	const handleClick = (optionIndex, value) => {
		const currentOptions = [ ...variant.selectedOptions ];

		currentOptions[optionIndex] = {
			...currentOptions[optionIndex],
			value
		};

		const selectedVariant = find(variants, ({ selectedOptions }) => isEqual(currentOptions, selectedOptions));

		setVariant({ ...selectedVariant });
	};

	const handleAddToCart = async () => {
		await addVariantToCart(productVariant.shopifyId, quantity);
	};

	return (
		<Wrapper>
			{console.log(client)}
			{options.map(({ id, name, values }, optionIndex) => (
				<ProductOptions key={id}>
					<OptionName>{name}</OptionName>
					<OptionValues>
						{values.map((value) => (
							<ProductValue
								key={`${id}-${value}`}
								active={variant.selectedOptions[optionIndex].value === value}
								onClick={() => handleClick(optionIndex, value)}
							>
								{value}
							</ProductValue>
						))}
					</OptionValues>
				</ProductOptions>
			))}
			<Button type="submit" onClick={handleAddToCart}>
				Add
			</Button>
		</Wrapper>
	);
};

export default ProductForm;
