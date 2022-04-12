export const E = {
    set: function(models, options) {
        (options = _.defaults({}, options, setOptions)).parse && (models = this.parse(models, options));
        var i, l, id, model, attrs, existing, sort, singular = !_.isArray(models);
        models = singular ? models ? [
            models
        ] : [] : _.clone(models);
        var at = options.at, targetModel = this.model, sortable = this.comparator && null == at && !1 !== options.sort, sortAttr = _.isString(this.comparator) ? this.comparator : null, toAdd = [], toRemove = [], modelMap = {}, add = options.add, merge = options.merge, remove = options.remove, order = !sortable && !!add && !!remove && [];
        for(i = 0, l = models.length; i < l; i++){
            if (id = (attrs = models[i]) instanceof Model ? model = attrs : attrs[targetModel.prototype.idAttribute], existing = this.get(id)) remove && (modelMap[existing.cid] = !0), merge && (attrs = attrs === model ? model.attributes : attrs, options.parse && (attrs = existing.parse(attrs, options)), existing.set(attrs, options), sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0)), models[i] = existing;
            else if (add) {
                if (!(model = models[i] = this._prepareModel(attrs, options))) continue;
                toAdd.push(model), model.on('all', this._onModelEvent, this), this._byId[model.cid] = model, null != model.id && (this._byId[model.id] = model);
            }
            order && order.push(existing || model);
        }
        if (remove) {
            for(i = 0, l = this.length; i < l; ++i)modelMap[(model = this.models[i]).cid] || toRemove.push(model);
            toRemove.length && this.remove(toRemove, options);
        }
        if (toAdd.length || order && order.length) {
            if (sortable && (sort = !0), this.length += toAdd.length, null != at) for(i = 0, l = toAdd.length; i < l; i++)this.models.splice(at + i, 0, toAdd[i]);
            else {
                order && (this.models.length = 0);
                var orderedModels = order || toAdd;
                for(i = 0, l = orderedModels.length; i < l; i++)this.models.push(orderedModels[i]);
            }
        }
        if (sort && this.sort({
            silent: !0
        }), !options.silent) {
            for(i = 0, l = toAdd.length; i < l; i++)(model = toAdd[i]).trigger('add', model, this, options);
            (sort || order && order.length) && this.trigger('sort', this, options);
        }
        return singular ? models[0] : models;
    }
};
