import React from 'react';
import styled from 'styled-components';

const Section = styled.div.attrs({ className:'section' })`
  box-shadow: -3px -3px 12px ${p=>p.theme.shadowDark},
              2px 2px 12px ${p=>p.theme.shadowLight};
  margin-bottom: 3em;
  border-radius: 6px;
  transition: box-shadow .4s;

`

const fakeData = [
  'Qui consequuntur necessitatibus. Perferendis officiis earum ab recusandae fuga. Voluptatem veniam praesentium a et repudiandae ad vero dolorem. Qui vitae voluptates nulla labore vitae rerum itaque et. Provident eum facere. Est animi nemo. Recusandae consectetur labore error consectetur quod dolor eveniet. Quisquam eveniet eos ut libero odit natus. Reiciendis aliquam et. Sed perspiciatis facilis fugiat dolores perspiciatis harum est distinctio.',

  'Veritatis sit est. Perspiciatis exercitationem illo a unde aliquid aut nisi ut. Qui aliquid odio est consequatur quis nesciunt. Hic pariatur ab molestiae temporibus suscipit architecto atque. Ab quisquam explicabo dicta tempora quia magni non itaque sed. Voluptatem sed dolorem ipsum aliquid. Inventore quisquam molestias beatae rerum est numquam aut. Ut rerum amet cumque non. Ut necessitatibus recusandae et dolores ad tempora ut laboriosam excepturi. Nulla et eligendi vel. Pariatur quam neque labore vel ipsum. Sequi ad qui. Eos minus expedita. Qui est quas vel nihil et cum placeat asperiores at. Sequi numquam velit in similique cumque dolorum fuga expedita culpa. Commodi aliquam similique similique est et occaecati magnam mollitia ratione. Deserunt modi expedita cum enim eius dolores. Repudiandae impedit autem ut maiores.',

  'Qui consequuntur necessitatibus. Perferendis officiis earum ab recusandae fuga. Voluptatem veniam praesentium a et repudiandae ad vero dolorem. Qui vitae voluptates nulla labore vitae rerum itaque et. Provident eum facere. Est animi nemo. Recusandae consectetur labore error consectetur quod dolor eveniet. Quisquam eveniet eos ut libero odit natus. Reiciendis aliquam et. Sed perspiciatis facilis fugiat dolores perspiciatis harum est distinctio. Culpa quia labore nobis quasi harum porro et. Ut libero eos est laborum ad consequatur est vel. Soluta animi rerum ea fuga veritatis qui. Non neque eaque rerum. Error id debitis neque ipsam ut qui natus. Quas voluptatem ipsum et inventore eius eos itaque. Eveniet qui consequatur.'
]
export default function Typography() {

  return (

    <div>
      <h1>H1 | Quicksand | sans-serif</h1>
      <h2>H2 | Quicksand | sans-serif</h2>
      <h3>H3 | Quicksand | sans-serif</h3>
      <h4>H4 | Quicksand | sans-serif</h4>
      <h5>H5 | Quicksand | sans-serif</h5>
      <h6>H6 | Quicksand | sans-serif</h6>

      {fakeData.map((data, i) => <Section key={i}>{data}</Section>)}

    </div>
  )
}