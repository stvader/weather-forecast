import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import SortableItem from './SortableItem';

const SortableList = SortableContainer(({ collection }: any) => (
  <div>
    {collection.map((weatherData: any, index: any) => (
      <SortableItem key={`item-${weatherData.id}`} index={index} weatherData={weatherData} />
    ))}
  </div>
));

export default SortableList;
