import React from "react";
import '../../styles/ProfileTable.css'

export default function ProfileTable (){
    return(
        <div style={{maxWidth: '60%'}}>
            <section class="transfer-section">
				<div class="transfer-section-header">
					<h2>Latest transfers</h2>
					<div class="filter-options">
						<button class="icon-button">
							<i class="ph-funnel"></i>
						</button>
						<button class="icon-button">
							<i class="ph-plus"></i>
						</button>
					</div>
				</div>
                <hr style={{margin: '0px'}}/>

				<div class="transfers">
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/apple.svg" className="img-profile-table"/>
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Apple Inc.</dt>
								<dd>Apple ID Payment</dd>
							</div>
							<div>
								<dt>4012</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>28 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 550
						</div>
					</div>
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/pinterest.svg" className="img-profile-table"/>
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Pinterest</dt>
								<dd>2 year subscription</dd>
							</div>
							<div>
								<dt>5214</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>26 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 120
						</div>
					</div>
					<div class="transfer">
						<div class="transfer-logo">
							<img src="https://assets.codepen.io/285131/warner-bros.svg" className="img-profile-table"/>
						</div>
						<dl class="transfer-details">
							<div>
								<dt>Warner Bros.</dt>
								<dd>Cinema</dd>
							</div>
							<div>
								<dt>2228</dt>
								<dd>Last four digits</dd>
							</div>
							<div>
								<dt>22 Oct. 21</dt>
								<dd>Date payment</dd>
							</div>
						</dl>
						<div class="transfer-number">
							- $ 70
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}