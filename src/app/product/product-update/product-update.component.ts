import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private productService: ProductService,
              private fb: FormBuilder,
              private route: Router) { }
  formEditProduct:any = FormGroup;
  // @ts-ignore
  id = +this.router.snapshot.paramMap.get('id');
  ngOnInit(): void {
    let productEdit = this.productService.findByIndex(this.id);
    this.formEditProduct = this.fb.group({
      name:[productEdit.name],
      price:[productEdit.price],
      description:[productEdit.description]
    })
  }
  submitForm(){
    let data = this.formEditProduct.value;
    this.productService.updateProduct(this.id,data);
    this.route.navigate(['product/list']).then();
  }
  // get name(){
  //   return this.formEditProduct.get('name');
  // }
  // get price(){
  //   return this.formEditProduct.get('price');
  // }
  // get description(){
  //   return this.formEditProduct.get('description');
  // }
}
